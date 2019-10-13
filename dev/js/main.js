/**
 *  Vue App for SuperOX
 * 
 *  Write by Eosin Chen
 *  eosinchen@gmail.com
 *  2019/08/17
 */

new Vue({
    el: "#app",
    data: {
        blackChess: '●',
        whiteChess: '○',
        chessBoard :[ ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
        ],
        currSide: '●',
        currTable: 5,
        table: 0,
        pos: 0
    },
    computed: {
        
    },
    methods: {
        borderLineColor: function(table){
            if (table == this.currTable) {
                return 'red';
            }
            else {
                return 'black';
            }
        },
        tableBGColor: function(table){
            if (table == this.currTable) {
                return 'white';
            }
            else if (table == this.pos) {
                return '#888888';            
            }
            else {
                return '#666666';
            }
        },
        mouseOver: function(table, pos){
        
            if (table != this.currTable)
                return;
            
            this.table = table;
            this.pos = pos;
            },
            onClick: function(table, pos){
            
            // 若非目前棋盤，則作警告
            if (table != this.currTable) {

                Swal.fire({
                type: 'error',
                title: '不對喔',
                text: '請下在紅框的棋盤內!!',
                });
                return;
            }  
                
            // 若已經有子，則作警告
            if (this.chessBoard[table-1][pos-1] != '') {
            
                Swal.fire({
                type: 'error',
                title: '不對喔',
                text: '請下在空白的位置!!',
                });
                return;
            }
            
            // 設定棋子
            this.chessBoard[table-1][pos-1] = this.currSide;
            
            // O 和 X 交換
            if (this.currSide == this.whiteChess ) {
                this.currSide = this.blackChess;
            }
            else {
                this.currSide = this.whiteChess;
            }
            
            // 切換棋盤
            this.currTable = pos;
        },
        resetAll: function(){

            Swal.fire({
                title: '確定重設?',
                text: "棋盤內容將會被清除，回到起初狀態",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '確定重設',
                cancelButtonText: '回到棋盤'
            }).then((result) => {
                if (result.value) {
                this.chessBoard=[ ['', '', '', '', '', '', '', '', ''],
                            ['', '', '', '', '', '', '', '', ''],
                            ['', '', '', '', '', '', '', '', ''],
                            ['', '', '', '', '', '', '', '', ''],
                            ['', '', '', '', '', '', '', '', ''],
                            ['', '', '', '', '', '', '', '', ''],
                            ['', '', '', '', '', '', '', '', ''],
                            ['', '', '', '', '', '', '', '', ''],
                            ['', '', '', '', '', '', '', '', ''],];
                this.currSide=this.blackChess;
                this.currTable=5;
                this.table=0;
                this.pos=0;
                }
            });
        }
    }
})
