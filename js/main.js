 let send=window.document.querySelector("button.send")
send.addEventListener("click",function(){
    let fullName=document.querySelector("input[name=fullName]").value
    let gender=document.querySelector("select[name=gender]").value
    let age=document.querySelector("select[name=age]").value
    let married=document.querySelector("select[name=married]").value
    let degree=document.querySelector("select[name=degree]").value
    let fatherName=document.querySelector("input[name=fatherName]").value
    let MotherName=document.querySelector("input[name=MotherName]").value
    let idNumber=Number(document.querySelector("input[name=id-Number]").value)
    let Email=document.querySelector("input[name=E-mail]").value
    let address=document.querySelector("textarea[name=address]").value
    let yob
    if (age==="15"){
        yob="2008"
    } else if (age==="16"){
        yob="2007"
    }  else if (age==="17"){
        yob="2006"
    }  else if (age==="18"){
        yob="2005"
    }  else if (age==="19"){
        yob="2004"
    }  else if (age==="20"){
        yob="2003"
    }  else if (age==="21"){
        yob="2002"
    }  else if (age==="22"){
        yob="2001"
    }  else if (age==="23"){
        yob="2000"
    }  else if (age==="24"){
        yob="1999"
    }  else if (age==="25"){
        yob="1998"
    }  else if (age==="26"){
        yob="1997"
    } else if (age==="27"){
        yob="1996"
    } else if (age==="28"){
        yob="1995"
    } else if (age==="29"){
        yob="1994"
    } else if (age==="30"){
        yob="1993"
    } else if (age==="31"){
        yob="1992"
    } else if (age==="32"){
        yob="1991"
    } else if (age==="33"){
        yob="1990"
    } else if (age==="34"){
        yob="1989"
    } else if (age==="35"){
        yob="1988"
    } else if (age==="36"){
        yob="1987"
    } else if (age==="37"){
        yob="1986"
    } else if (age==="38"){
        yob="1985"
    } else if (age==="39"){
        yob="1984"
    } else if (age==="40"){
        yob="1983"
    } else if (age==="41"){
        yob="1982"
    } else if (age==="42"){
        yob="1981"
    } else if (age==="43"){
        yob="1980"
    } else if (age==="44"){
        yob="1979"
    } else if (age==="45"){
        yob="1978"
    }  else if (age==="46"){
        yob="1977"
    }  else if (age==="47"){
        yob="1976"
    }  else if (age==="48"){
        yob="1975"
    }  else if (age==="49"){
        yob="1974"
    }  else {
        yob="1973"
    }  

    let root=document.querySelector("div#root")
    root.innerHTML=`
    <div class="p01"> 
      <div class="name">
        <p class="name"> FullName : </p>
        <span class="name bg"> ${fullName} </span>
      </div> 
      <div class="gender">
        <p class="gender"> gender : </p>
        <span class="gender bg"> ${gender} </span>
      </div> 
    </div>

    <div class="p02"> 
      <div class="age">
        <p class="age"> ...... : </p>
        <span class="age bg"> ${yob} </span>
      </div> 
      <div class="married">
        <p class="married"> marital status : </p>
        <span class="married bg"> ${married} </span>
      </div> 
      <div class="degree">
        <p class="degree"> degree : </p>
        <span class="degree bg"> ${degree} </span>
      </div> 
    </div>



    <div class="p03"> 
      <div class="fatherName">
        <p class="fatherName"> fatherName : </p>
        <span class="fatherName bg"> ${fatherName} </span>
      </div> 
      <div class="motherName">
        <p class="motherName"> motherName : </p>
        <span class="motherName bg"> ${MotherName} </span>
      </div> 
    </div>


    <div class="p04"> 
      <div class="id-Number">
        <p class="id-Number"> id-Number : </p>
        <span class="id-Number bg"> ${idNumber} </span>
      </div> 
      <div class="E-mail">
        <p class="E-mail"> E-mail : </p>
        <span class="E-mail bg"> ${Email} </span>
      </div> 
    </div>

    <div class="p05"> 
      <div class="address">
        <p class="address"> address : </p>
        <span class="address bg"> ${address} </span>
      </div> 
    </div>
    `
})