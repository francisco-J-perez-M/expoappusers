import {Tabs} from 'expo-router'

export default function TabsLayouts(){
  return (
    <Tabs>
      <Tabs.Screen name='Home' options={{title: 'Inicio'}}/>
      <Tabs.Screen name='Explorer' options={{title: 'Explorar'}}/>
    </Tabs>
  )
}