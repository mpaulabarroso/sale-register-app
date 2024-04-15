import { Button } from '@componets/Button'
import { Separator } from '@componets/Separator'
import { useContext } from 'react'
import { Item, SectionContext } from '../context/SectionContext'
import { styles } from '../utils/settingsStyles'
import { View } from 'react-native'

export function SectionList() {
    const { items } = useContext(SectionContext)

    if (!(items && items.length > 0)) return null

    return (
        <>
            {
                items.map((item: Item) =>
                    <View style={styles.contRow}>
                        <Button
                            styleButton={styles.buttonCont}
                            styleText={styles.buttonText}
                            onPress={() => { }}
                            content='Edit'
                        />
                        <Separator key={item.id} title={item.name} />
                        <Button
                            styleButton={styles.buttonCont}
                            styleText={styles.buttonText}
                            onPress={() => { }}
                            content='Del'
                        />
                    </View>
                )
            }
            <Button
                styleButton={styles.buttonCont}
                styleText={styles.buttonText}
                onPress={() => { }}
                content='Sincronizar'
            />
        </>
    )
}