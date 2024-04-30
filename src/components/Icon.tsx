import { MaterialIcons } from '@expo/vector-icons'

interface IconNames {
    [key: string]: keyof typeof MaterialIcons.glyphMap
}

const OBJ_NAME: IconNames = {
    arrowDown: 'arrow-drop-down',
    arrowUp: 'arrow-drop-up',
    check: 'check-circle-outline',
    sync: 'sync',
    delete: 'delete',
}

interface IconProps {
    name: 'arrowDown' | 'arrowUp' | 'sync' | 'check' | 'delete'
}

export function Icon({ name }: IconProps) {
    return (
        <MaterialIcons
            name={OBJ_NAME[name]}
            size={24}
            color="black"
        />
    )
}