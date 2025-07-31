import { cn } from '@/lib/utils';

export function Icon({ iconNode, className, ...props }) {
    return <IconComponent className={cn('h-4 w-4', className)} {...props}/>;
}
