import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { AdminLayoutProvider } from './Context/AdminLayoutContext';
import { AdminDefaultProvider } from './Context/AdminDefaultContext';
import { RegisterProvider } from './Context/RegisterContext.jsx';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Domains/${name}.jsx`,
            import.meta.glob('./Domains/**/*.jsx')
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <AdminLayoutProvider>
                <AdminDefaultProvider>
                    <RegisterProvider>
                        <App {...props} />
                    </RegisterProvider>
                </AdminDefaultProvider>
            </AdminLayoutProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
