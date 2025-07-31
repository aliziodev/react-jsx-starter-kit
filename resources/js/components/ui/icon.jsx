export function Icon({ iconNode, className }) {
    if (!IconComponent) {
        return null;
    }
    return <IconComponent className={className}/>;
}
