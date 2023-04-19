import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import { useContext, useState } from "react";
import userContext from "./context";
import Card from "./card";
import React from "react";

  function Deposit() {
  const [amount, setAmount] = useState();
  let data = useContext(userContext);
  let dataen = data.users.length;
  let balance = data.users[dataen - 1].balance;
  let customer = data.users[dataen - 1].name;
  
  const deposite = () => {
    alert(amount);
    if (data.users.length === 0) {
      alert("create account");
    } else {
      if (amount >= 0) {
        let dep = balance + Number(amount) - 1;
        data.users[data.users.length - 1].balance = dep;
        alert("successfull and we took our normal deposit fee of $1");
      } else if (amount <= 0) {
        alert("enter the valid amount");
      }
    }
  };

  return (
    <>
      {/* <h1>Deposit</h1> */}
      <section class="vh-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
          <div className="column">
      <div className="row">
        <div><h1>Deposit</h1></div>
    <Card
      txtcolor="black"
      header="Now Give Us Your Money"
      title="We Just Want to Keep it Safe for You...Trust Us"
      body={(<img src={require('../images/deposit.png')} className="img-fluid" alt=""/>)}
      >
    </Card>
    <Card
      body={(<img src={require('../images/countingmoney.jpg')} className="img-fluid" alt=""/>)}
      >
    </Card>
    
    <div className="card-header" style={{fontWeight: 'bold', fontFamily: 'monospace', fontSize: '2.2rem'}}>
                     {`${(customer)} your Account Balance: $${(balance).toFixed(2)}`}
                    </div>
      </div>
      <div class="mx-auto col-md-8 col-lg-3 col-xl-2 offset-xl-2">
              <form class="mx-auto">
                <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start"></div>

                <div class="divider d-flex align-items-center my-4"></div>
      
                <div class="mx-auto form-outline mb-1">
                  <input
                    type="number"
                    min={1}
                    class="form-control form-control-lg"
                    placeholder="Enter $ Amount"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <label class="form-label" for=""></label>
                </div>

                <div class="mx-auto d-flex justify-content-between align-items-center">
          
                </div>

                <div class="text-center text-lg-start mt-1 pt-2">
                  <button type="button" onClick={deposite}>
                    Deposit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
          
      </section>
    </>
  );
}

export default Deposit;
