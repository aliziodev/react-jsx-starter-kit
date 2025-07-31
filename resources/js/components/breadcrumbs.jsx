import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link } from '@inertiajs/react';
import { Fragment } from 'react';

export function Breadcrumbs({ breadcrumbs }) {
    return (<>
            {breadcrumbs.length > 0 && (
                        {breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (<Fragment key={index}>
                                    
                                        {isLast ? ({item.title}</BreadcrumbPage>) : (
                                                <Link href={item.href}>{item.title}</Link>
                                            </BreadcrumbLink>)}
                                    </BreadcrumbItem>
                                    {!isLast && <BreadcrumbSeparator />}
                                </Fragment>);
            })}
                    </BreadcrumbList>
                </Breadcrumb>)}
        </>);
}
