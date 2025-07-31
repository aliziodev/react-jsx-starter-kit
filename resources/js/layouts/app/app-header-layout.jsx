import { AppContent } from '@/components/app-content';
import { AppHeader } from '@/components/app-header';
import { AppShell } from '@/components/app-shell';

export default function AppHeaderLayout({ children, breadcrumbs }) {
    return (
            <AppHeader breadcrumbs={breadcrumbs}/>
            {children}</AppContent>
        </AppShell>);
}
