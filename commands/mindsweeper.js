module.exports = {
    name: 'mindsweeper',
    usage: '',
    guildOnly: false,
    enabled: true,
    level: 0,
    aliases: [],
    category: 'Games',
    description: 'SWEEP SWEEP SWEEP',
    moreHelp: null
};
// eslint-disable-next-line no-unused-vars
module.exports.run = async (client, message, args, level) => {

        let i;
        let rows = 5;
        let columns = 5;
        let board = [];
        let placed = 0;
        if(args[0]) rows = (!isNaN(Number(args[0]))) ? Number(args[0]) : 5;
        if(args[1]) columns = (!isNaN(Number(args[1]))) ? Number(args[1]) : 5;
        if(rows < 5) rows = 5;
        if(columns < 5) columns = 5;
        if(rows > 13) rows = 13;
        if(columns > 13) columns = 13;
        let tmines = 20;
        if (args[2] > 100) args[2] = 100
        if (args[2] < 0) args[2] = 0
        if(args[2]) tmines = (!isNaN(Number(args[2]))) ? Number(args[2]) : 20;
        if(tmines < 10) tmines = 10;
        if(tmines > 90) tmines = 90;
    
        let mines = numberfrom(tmines,columns*rows);
        const blocks = {
            "mine": ":bomb:",
            "0": ":zero:",
            "1": ":one:",
            "2": ":two:",
            "3": ":three:",
            "4": ":four:",
            "5": ":five:",
            "6": ":six:",
            "7": ":seven:",
            "8": ":eight:"
        }
        do {
            i = Math.floor(Math.random() * columns * rows);
            if (board[i] != 'mine') {
                board[i] = 'mine';
                placed++;
            }
        } while (placed < mines);
    
        for (var x = 0; x < columns; x++) {
            for (var y = 0; y < rows + 1; y++) {
                if (check(x, y, columns, rows, board) != 'mine') {
                    board[x + y * columns] =
                        ((check(x, y + 1, columns, rows, board) == 'mine') | 0)
                        + ((check(x - 1, y + 1, columns, rows, board) == 'mine') | 0)
                        + ((check(x + 1, y + 1, columns, rows, board) == 'mine') | 0)
                        + ((check(x, y - 1, columns, rows, board) == 'mine') | 0)
                        + ((check(x - 1, y - 1, columns, rows, board) == 'mine') | 0)
                        + ((check(x + 1, y - 1, columns, rows, board) == 'mine') | 0)
                        + ((check(x - 1, y, columns, rows, board) == 'mine') | 0)
                        + ((check(x + 1, y, columns, rows, board) == 'mine') | 0)
                }
            }
    
        }
    
        function percentage(partialValue, totalValue) {
            return (100 * partialValue) / totalValue;
        }
    
        function numberfrom(perc, val) {
            return Math.ceil((perc/100) * val)
        }
        function check(x, y, columns, rows, board) {
            if ((x >= 0) && (y >= 0) && (x < columns) && (y < rows))
                return board[x + y * columns];
        }
    
    
        const bombper = percentage(mines, rows * columns)
        let diff = "Easy"
    
        if (bombper > 40) {
            diff = "Hard"
        } else if (bombper > 20) {
            diff = "Easy"
        }
    
        let text = `**Mines: ${mines} | Difficulty: ${diff}**\n`
        if(args[3] == "--copy") text += "`";
    
        let c = 0
        for (var y = 0; y < rows; y++) {
            for (var x = 0; x < columns; x++) {
                let s = "||";
                if (args[3] == "--reveal") s = ""; 
                text += `${s}${blocks[board[c].toString()]}${s}`
                c += 1
            }
            text += `\n`
        }
    
        if(args[3] == "--copy") text += "`";
        message.channel.send(text)
        
};