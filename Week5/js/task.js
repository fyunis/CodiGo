class Task {
    //dentro de constructor van las propiedades que tendrán las tareas
    constructor(_text) {
        //la siguiente función devuelve una cadena aleatoria (random)
        this.id = '_' + Math.random().toString(36).slice(2);
        this.text = _text;
        this.status = 'all'; // done | delete
        //la función new Date(), retorna el valor de fecha y hora actual
        this.created_at = new Date();
        // this.priority = 'high';
        this.done_at = null;
        this.deleted_at = null;
    }

    //método done, va convertir esa tarea en realizada
    done() {
        //cambia el estado de la tarea a done
        this.status = 'done';
        this.done_at = new Date(); //fecha y hora actual
        document.querySelector("#" + this.id).classList.add("done");
    }

    //método delete, va convertir la tarea en eliminada
    delete() {
        this.status = 'delete';
        this.deleted_at = new Date();
        document.querySelector("#" + this.id).classList.add("delete");
    }

    //crea elemento HTML
    createElement() {
        //creamos un párrafo
        const element = document.createElement('p');
        //agregamos un atributo, en este caso el atributo ID
        element.setAttribute('id', this.id);
        element.setAttribute('class', 'task');
        element.innerHTML = `
            <input type="checkbox" onchange="checkTask(this);">
            <span>${this.text}</span>
            <a onclick="deleteTask(this);">❌</a>
        `;
        //finalmente retornamos el nood para que pueda ser agregado
        return element;
    }
}