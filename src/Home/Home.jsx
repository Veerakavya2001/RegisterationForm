import "./Home.css";
import deleteicon from "../images/deleteicon.png";
export default function DataTable(props) {
  return (
    <div className="full-container">
      <div >
        {props.deleted ? (
         <div className="text-content">
            <span >No Trash Items</span>
         </div> 
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Company</th>
                  <th>Date Of Birth</th>
                  <th>Phone No</th>
                  <th>Address</th>
                  <th>Website</th>
                  <th>Delete</th>
                </tr>
              </thead>
              {props.FetchedData.map((item, index) => {
                return (
                  <tbody key={index}>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.firstname}</td>
                      <td>{item.lastname}</td>
                      <td>{item.company.name}</td>
                      <td>{item.birthDate}</td>
                      <td>{item.phone}</td>
                      <td>
                        {item.address.street},{item.address.city}
                        <div>{item.address.zipcode}</div>
                      </td>
                      <td>{item.website}</td>
                      <td>
                        {props.trashed ? (
                          <span onClick={() => props.RestoredData(index)}>
                            Restore
                          </span>
                        ) : (
                          <img
                            src={deleteicon}
                            alt="deleteIcon"
                            width={20}
                            onClick={() => props.handleDelete(index)}
                          ></img>
                        )}
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
