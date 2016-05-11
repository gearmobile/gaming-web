
window.addEventListener('DOMContentLoaded', function () {

    function logMessage( message, block ) {
        var holder = document.createElement('div');
        holder.textContent = message;
        block.appendChild(holder);
    }

    function makeHolder() {

        var holder = document.createElement('div');

        holder.style.height = '75px';
        holder.style.widows = '450px';
        holder.style.overflow = 'auto';
        holder.style.border = '1px solid #666';
        holder.style.backgroundColor = '#ccc';
        holder.style.padding = '8px';
        holder.style.position = 'absolute';
        holder.style.right = '20px';
        holder.style.bottom = '10px';
        document.body.appendChild(holder);

        return holder;
    }

    function hello (name) {
        return 'Hello, ' + name + '! You look very pretty today :)';
    }

    var log = makeHolder();
    logMessage(hello('Perelman'), log);
    logMessage(hello('Peter'), log);
    logMessage(hello('John'), log);

}, false);