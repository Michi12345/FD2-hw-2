'use strict';

function createTagsField() {
    let container = document.createElement('div');
    let field = document.createElement('input');
    let tagsArr = [];
    container.classList.add('field-for-tags');
    field.classList.add('entry-field');
    field.type = 'text';
    container.appendChild(field);

    field.addEventListener('keypress', event => {
        if (event.key === 'Enter' || event.key === ',') {
            let tag = document.createElement('span');
            tag.addEventListener('click', event => {
                tag.remove();
            });
            tag.textContent = field.value;
            tagsArr.push(field.value);
            field.value = '';
            tag.classList.add('container-for-tags');
            container.insertBefore(tag, field);
            event.preventDefault();
        }
    });

    return {
        element: container,
        getTags: () => tagsArr,
        destroy: () => {
            container.remove();
        }
    };
}