"use client";
import {useRouter} from 'next/navigation'

function Users( { users }){

    const router = useRouter()

    return (
      <div>
        {users.map((user) => (
            <div className="card text-white bg-secondary mt-5 anchura" >
                <div className="card-body">
                    <div className="row">
                        <div className="col-8">
                            <h4 className="card-title">{user.first_name} {user.last_name}</h4>
                            <p className="card-text">{user.email}</p>
                        </div>
                        <div className="col-4">
                            <img src={user.avatar} className="img-fluid rounded-circle" key= {user.id}
                                onClick={ () => {
                                    router.push(`/users/${user.id}`)
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </div>
    )
  }
  
export default Users