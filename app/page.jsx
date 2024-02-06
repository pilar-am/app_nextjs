import Users from '@/components/Users'

async function fetchUsuarios(){
  const res = await fetch('https://reqres.in/api/users')
  const datos = await res.json()  //Retorna un objeto con el array de usuarios
  console.log(datos)
  return datos.data   //Retorna el array de usuarios
}

async function IndexPage(){

  const users = await fetchUsuarios();

  return (
    
    <Users users= {users}/>
  )
}

export default IndexPage
