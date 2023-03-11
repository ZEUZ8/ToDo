import './App.css';
import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTextArea,
  MDBTooltip,
} from "mdb-react-ui-kit";

export default function App() {

  const [toDo,setToDo] = React.useState("")

  const [list,setList] = React.useState([])
  console.log(toDo)

  function handleChange(event){
    setToDo(event.target.value)
  }
  
  function add(){
    setList(pre => [
      ...pre,{
        id:pre.length+1,
        task:toDo,
        completed:false
      }
    ])
    setToDo("");
  }

  function handleCheck(event){
    setList(pre=>{
      return pre.map(repeated => {
       if(event.target.id == repeated.id){
        return {...repeated,completed:!repeated.completed}
       }
       return repeated
      })
    })
  }
  return (
    <section className="vh-100" style={{ backgroundColor: "#e2d5de" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol xl="10">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-5">
                <h6 className="mb-3">Awesome Todo List</h6>
                <div className="d-flex justify-content-center align-items-center mb-4">

                  <MDBTextArea
                    onChange={handleChange}
                    label="What do you need to do today?"
                    id="textAreaExample"
                    rows={4}
                    value={toDo}
                    wrapperClass="flex-fill"
                  />
                  {toDo.length >=1 ? <MDBBtn type="submit" size="lg" className="ms-2" onClick={add}> Add  </MDBBtn> :
                   <MDBBtn type="submit" size="lg" className="ms-2" > Type  </MDBBtn>}
                </div>
                <MDBListGroup className="mb-0">
                      {list.map(pre =>{
                        return(
                          <MDBListGroupItem className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                          <div  className="d-flex align-items-center">
                            <MDBCheckbox
                              onChange={handleCheck}
                              name="completed"
                              checked={pre.completed}
                              id={pre.id}
                              className="me-3"
                            />
                            {pre.completed ? <s>{pre.task}</s> :<p>{pre.task}</p>}
                            </div>
                            </MDBListGroupItem>
                          )
                      })}
                </MDBListGroup>


              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}