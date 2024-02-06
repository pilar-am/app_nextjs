async function getUser(id){
  const res = await fetch(`https://reqres.in/api/users/${id}`)

  const datos = await res.json()
  return datos.data;
}

async function UsersPage({params}){

  const user = await getUser(params.id)
  
  return (
    <div className="card text-white bg-secondary mt-5 anchura" >
      <div className="card-body">
        <div className="row">
          <div className="col-8">
            <h4 className="card-title">{user.first_name} {user.last_name}</h4>
            <p className="card-text">{user.email}</p>
          </div>
          <div className="col-4">
            <img src={user.avatar} className="img-fluid rounded-circle"/>
         </div>
        </div>
      </div>
    </div>
  )
}
  
export default UsersPage