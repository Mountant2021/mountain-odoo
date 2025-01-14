import { initTheme, toggleTheme } from './common.js';

const COMPONENTS = [ {
    page: 'Mountain Coder',
}, {
    icon: 'github',
    color: 'dark',
    link: 'https://github.com/Mountant2021',
    title: 'Github',
    size: 6,
}, {
    icon: 'youtube',
    color: 'red',
    link: 'https://www.youtube.com/@MountainCoder',
    title: 'Youtube',
    size: 6,
}, {
    page: 'Viindoo',
}, {
    icon: 'globe',
    color: 'primary',
    link: 'https://viindoo.com/',
    title: 'Viindoo',
    size: 6,
}, {
    icon: 'robot',
    color: 'green',
    link: 'https://runbot.viindoo.com',
    title: 'Runbot',
    size: 6,
}, {
    icon: 'github',
    color: 'dark',
    title: 'Github',
    size: 12,
    shortcuts: [{
        title: 'tvtmaaddons',
        items: {
            '16.0': 'https://github.com/Viindoo/tvtmaaddons/tree/16.0',
            '15.0': 'https://github.com/Viindoo/tvtmaaddons/tree/15.0',
            '14.0': 'https://github.com/Viindoo/tvtmaaddons/tree/14.0',
        }
    }, {
        title: 'erponline-enterprise',
        items: {
            '16.0': 'https://github.com/Viindoo/erponline-enterprise/tree/16.0',
            '15.0': 'https://github.com/Viindoo/erponline-enterprise/tree/15.0',
            '14.0': 'https://github.com/Viindoo/erponline-enterprise/tree/14.0',
        }
    }],
}, {
    page: 'Odoo',
}, {
    icon: 'globe',
    color: 'primary',
    link: 'https://odoo.com',
    title: 'Odoo',
    size: 6,
}, {
    icon: 'cloud-fill',
    color: 'gray',
    link: 'https://www.odoo.sh',
    title: 'Odoo.sh',
    size: 6,
}, {
    icon: 'robot',
    color: 'green',
    link: 'https://runbot.odoo.com',
    title: 'Runbot',
    size: 6,
}, {
    icon: 'patch-question',
    color: 'danger',
    link: 'https://www.odoo.com/help',
    title: 'Odoo Support',
    size: 6,
}, {
    icon: 'card-text',
    color: 'purple',
    link: 'https://www.odoo.com/forum/help-1',
    title: 'Forum',
    size: 6,
}, {
    icon: 'boxes',
    color: 'blue',
    title: 'Apps Store',
    size: 6,
    shortcuts: [{
        title: 'Apps',
        link: 'https://apps.odoo.com/apps/modules',
    }, {
        title: 'Themes',
        link: 'https://apps.odoo.com/apps/themes',
    }],
}, {
    icon: 'book',
    color: 'pink',
    title: 'Documentation',
    size: 12,
    shortcuts: [{
        title: 'Videos',
        link: 'https://www.odoo.com/slides/all',
    }, {
        title: 'User Docs',
        link: 'https://www.odoo.com/documentation/latest/applications.html',
    }, {
        title: 'Developer',
        link: 'https://www.odoo.com/documentation/latest/developer.html',
    }, {
        title: 'Installation',
        link: 'https://www.odoo.com/documentation/latest/administration.html',
    }],
}, {
    icon: 'github',
    color: 'dark',
    title: 'Github',
    size: 12,
    shortcuts: [{
        title: 'Source Code',
        link: 'https://github.com/odoo/odoo/tree/master',
        items: {
            '16.0': 'https://github.com/odoo/odoo/tree/16.0',
            '15.0': 'https://github.com/odoo/odoo/tree/15.0',
            '14.0': 'https://github.com/odoo/odoo/tree/14.0',
        }
    }, {
        title: 'Issues',
        link: 'https://github.com/odoo/odoo/issues',
    }, {
        title: 'PR',
        link: 'https://github.com/odoo/odoo/pulls',
    }],
}];

let componentContent = '';
COMPONENTS.forEach(component => {
    if (component.page){
        componentContent += `\
            <div class="col-12 my-1">
                <div class="ou-link border rounded position-relative bg-info">
                    <div class="d-flex align-items-center p-2">
                        <div class="flex-grow-1 ms-2">
                            <h6 class="mb-0 text-uppercase fw-bolder text-white">${component.page}</h6>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        let shortcutsContent = '';
        let linkContent = '';
        if (component.shortcuts) {
            component.shortcuts.forEach(shortcut => {
                if (shortcut.items) {
                    let items = '';
                    for (let option in shortcut.items) {
                        items += `<li><a class="dropdown-item" target="_blank" href="${shortcut.items[option]}">${option}</a></li>`
                    }
                    shortcutsContent += `\
                        <div class="btn-group" role="group">
                            <a class="btn btn-${component.color}-soft ms-2 btn-sm" href="${shortcut.link}" target="_blank">
                                ${shortcut.title}
                            </a>
                            <div class="btn-group" role="group">
                                <button class="btn btn-${component.color}-soft btn-sm dropdown-toggle" type="button" id="options" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bi bi-three-dots-vertical"></i>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="options">
                                    ${items}
                                </ul>
                            </div>
                        </div>
                    `;
                } else {
                    shortcutsContent += `\
                        <a class="btn btn-${component.color}-soft ms-2 btn-sm" href="${shortcut.link}" target="_blank">
                            ${shortcut.title}
                        </a>
                    `;
                }
            });
        } else {
            linkContent = `<a class="link" href="${component.link}" target="_blank"></a>`;
        }
        componentContent += `\
            <div class="col-${component.size || 6} my-1">
                <div class="ou-link border rounded position-relative">
                    ${linkContent}
                    <div class="d-flex align-items-center p-2">
                        <div class="flex-shrink-0">
                            <div class="rounded-circle ou-icon-container ou-bg-${component.color}">
                                <i class="bi bi-${component.icon}"></i>
                            </div>
                        </div>
                        <div class="flex-grow-1 ms-2">
                            <h6 class="mb-0">${component.title}</h6>
                        </div>
                        ${shortcutsContent}
                    </div>
                </div>
            </div>
        `;
    }
});
document.querySelector('.ou-link-container').innerHTML = componentContent;

document.querySelector('.ou-open-options-page').addEventListener('click', ev => {
    chrome.tabs.create({ url: 'options.html' });
});

initTheme();
