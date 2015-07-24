/**
 * MiaoChe-主搜索插件
 * CodeBy:Mr.Co
 * Date:2015/06/03
 * Version:1.0
 */
;(function(win,$,undefined){
    'use strict';
    /*
     * 构建一个搜索对象
     * @options     object      配置参数
     **/
    var Search = function(options){
        /*
         * 文集库
         **/
        this.MESSAGES = {
            'tip1':'错误：未设置searchCallback搜索回调方法。'
        };

        /*
         * 参数配置
         **/
        this.OPTIONS = $.extend({
            version:'1.0.0',
            optionIndex:-1,
            dataPath:{
                get:'/aj/getdata',
                post:'/aj/postdata'
            },
            offset:(function(opts){
                var _$this = opts.element,
                    _height = _$this.height(),
                    _offset = _$this.offset(),
                    _left = _offset.left,
                    _top = _offset.top + _height;
                return {
                    left:_left,
                    top:_top
                }
            }(options))
        },options);

        /*
         * 通用工具对象
         **/
        this.utils = {
            /*
             * Object数据填充方法
             **/
            replaceData:function(str,data){
                return str.replace(/(\{(.*?)\})/g, function (a, b, c) {
                    return data[c] == 'null' ? '' : data[c];
                });
            },
            /*
             * 验证字符串是否是空字符
             **/
            isEmpty:function(str){
                return /^\s*$/g.test(str);
            }
        };
    }

    /*
     * 关键字监听
     **/
    Search.prototype.searchListenerEvent = function(){
        var _this = this,
            searchHandle = function(e){
                var _$this = $(this),
                    _val = $.trim(_$this.val());

                _$this.removeAttr('data-id');

                if(_this.utils.isEmpty(_val)) {
                    _this.closeOptionLayer();
                    return;
                }

                _this.buiderOptionLayer.call(this,_this);
                _this.keydownSelectListener(e);

            };

        _this.OPTIONS.element.bind('keyup',searchHandle).bind('focus',searchHandle);
        return _this;
    }

    /*
     * 搜索值选择事件
     **/
    Search.prototype.optionSelectEvent = function(){
        var _this = this,
            resetOptionList = function(){
                var _$optionList = $('.mrco-search-option').removeClass('selected');
                _$optionList.find('.mrco-search-option-delete').hide();
                _$optionList.find('.mrco-search-font-history').show();
            };

        $('.mrco-search-option')
            .bind('click',function(e){
                var _$this = $(this);
                if($(e.target).attr('class') == 'mrco-search-option-delete'){
                    _$this.remove();
                }else{
                    _this.OPTIONS.element.val(_$this.attr('data-name')).attr('data-id',_$this.attr('data-id'));
                    _this.closeOptionLayer();
                    $('#' + _this.OPTIONS.buttonSearchID).click();
                }
            })
            .bind('mouseover',function(){
                var _$this = $(this);
                _this.OPTIONS.optionIndex = -1;
                resetOptionList();
                if(_$this.children('.hig').size() < 1) return;
                _$this.find('.mrco-search-font-history').hide();
                _$this.find('.mrco-search-option-delete').show();
            })
            .bind('mouseout',function(){
                var _$this = $(this);
                if(_$this.children('.hig').size() < 1) return;
                _$this.find('.mrco-search-font-history').show();
                _$this.find('.mrco-search-option-delete').hide();
            });

        return _this;
    }

    /*
     * 搜索按钮触发事件
     **/
    Search.prototype.buttonSearchClickEvent = function(){
        var _this = this;
        $('#' + _this.OPTIONS.buttonSearchID).bind('click',function(){
            if(typeof _this.OPTIONS.searchCallback != 'function'){
                throw new Error(_this.MESSAGES.tip1);
                return;
            }
            _this.OPTIONS.searchCallback({
                id:_this.OPTIONS.element.attr('data-id') || '-1',
                key: $.trim(_this.OPTIONS.element.val())
            });
            _this.closeOptionLayer();
            //_this.postData(_this.OPTIONS.element.val(),_this.OPTIONS.searchCallback);
        });
        return _this;
    }

    /*
     * 监听键盘选择
     * @e   event       事件源
     **/
    Search.prototype.keydownSelectListener = function(e){
        var _$option = $('.mrco-search-option'),
            _sumCount = _$option.size(),
            _index = this.OPTIONS.optionIndex,
            selecedOption = function(index){
                if(index < 0) return;
                var _$this = _$option.removeClass('selected').eq(index);
                _$this.addClass('selected');
                if(_$this.children('.hig').size() < 1) return;
                _$this.find('.mrco-search-font-history').hide();
                _$this.find('.mrco-search-option-delete').show();
            };

        if(e.keyCode == 38 && _index > 0){
            _index--;
        }

        if(e.keyCode == 40 && _index < _sumCount - 1 ){
            _index++;
        }

        if(e.keyCode == 13){
            if(this.OPTIONS.optionIndex < 0){
                $('#' + this.OPTIONS.buttonSearchID).click();
            }else{
                $('.mrco-search-option').eq(_index).click();
            }
            return;
        }

        this.OPTIONS.optionIndex = _index;
        selecedOption(_index);
    }

    /*
     * 创建结果选项列表层
     * @search      object      搜索对象
     **/
    Search.prototype.buiderOptionLayer = function(search){
        var _this                  = search,
            _$searchWrap           = $('#js-mrco-search-wrap'),
            _val                   = $.trim($(this).val()),
            _optionTemplate        = '<p class="mrco-search-option" data-id="{id}" data-name="{carName}"><a class="mrco-search-key">{carName}<span class="mrco-search-font-discount">{discount}</span><span class="mrco-search-option-delete">删除</span></a></p>',
            _optionHistoryTemplate = '<p class="mrco-search-option" data-id="{id}" data-name="{carName}"><a class="mrco-search-key hig">{carName}<span class="mrco-search-font-history">搜索历史</span><span class="mrco-search-option-delete">删除</span></a></p>',
            _template              = '<div id="js-mrco-search-wrap" class="mrco-search-list-wrap" {style}>        '+
                                     '   <div class="mrco-search-data-layer">                                     '+
                                     '       {keyList}                                                            '+
                                     '    </div>                                                                  '+
                                     '</div>',
            _optinList             = '';

        _this.getData(_val,function(data){
            var _offset = _this.OPTIONS.offset,
                _historyData = data.historyList,
                _keyData = data.keyList;

            for(var i = 0,len = _historyData.length; i < len; i++){
                _optinList += _this.utils.replaceData(_optionHistoryTemplate,_historyData[i]);
            }

            for(var i = 0,len = _keyData.length; i < len; i++){
                _optinList += _this.utils.replaceData(_optionTemplate,_keyData[i]);
            }

            if(_$searchWrap.size() > 0){
                _$searchWrap.children('.mrco-search-data-layer').html(_optinList);
                _$searchWrap.show();
            }else{
                _template = _this.utils.replaceData(_template,{
                    style:_this.utils.replaceData('style="left:{left}px; top:{top}px; width:{width}px;"',{
                        left:_offset.left,
                        top:_offset.top + 1,
                        width:_this.OPTIONS.element.width() - 2
                    }),
                    keyList:_optinList
                });
                $(document.body).append(_template);
            }

            _this.optionSelectEvent();
        });
    }

    /*
     * 关闭列表层
     **/
    Search.prototype.closeOptionLayer = function(){
        $('#js-mrco-search-wrap').hide();
        this.OPTIONS.optionIndex = -1;
    }

    /*
     * 获取Key匹配的data
     * @key     string      关键字
     * @call    function    回调FN
     **/
    Search.prototype.getData = function(key,call){
        var _this = this;
        call({
            historyList:[
                { 'id':'001', 'carName':'BMW1系','discount': '7.6折起' },
                { 'id':'002', 'carName':'BMW2系','discount': '8.6折起' },
                { 'id':'003', 'carName':'BMW3系','discount': '9.6折起' },
                { 'id':'004', 'carName':'BMW4系','discount': '5.6折起' }
            ],
            keyList:[
                { 'id':'001', 'carName':'奥迪A1','discount': '7.6折起' },
                { 'id':'002', 'carName':'奥迪A2','discount': '8.6折起' },
                { 'id':'003', 'carName':'奥迪A3','discount': '9.6折起' },
                { 'id':'004', 'carName':'奥迪A4','discount': '5.6折起' },
                { 'id':'005', 'carName':'奥迪A5','discount': '6.6折起' },
                { 'id':'006', 'carName':'奥迪A6','discount': '9折起' },
                { 'id':'007', 'carName':'奥迪A7','discount': '5折起' },
                { 'id':'008', 'carName':'奥迪Q3','discount': '6折起' },
                { 'id':'009', 'carName':'奥迪Q5','discount': '7.6折起' }
            ]
        });
        return;
        //模拟数据返回

        $.get(_this.OPTIONS.dataPath.get,{
            key:key
        },call);
    }

    /*
     * Post关键字
     * @key     string      关键字
     * @call    function    回调FN
     **/
    Search.prototype.postData = function(key,call){
        var _this = this;

        $.post(_this.OPTIONS.dataPath.post,{
            key:key
        },call);
    }

    /*
     * 初始化
     **/
    Search.prototype.init = function(){
        this.searchListenerEvent()
            .buttonSearchClickEvent();
    }

    /*
     * 检测是否已存在search
     **/
    if($.search){
        new Error('错误：检测到jQuery运行环境中已存在一个名为Search的对象。');
        return;
    }

    /*
     * 扩展到jQuery库中便于调用
     * @options     object      配置参数
     **/
    $.fn.search = function(options){
        new Search($.extend({
            element:this,
            buttonSearchID:options.buttonSearchID || null
        },options)).init();
    }
}(window,jQuery));