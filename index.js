let tbody = document.querySelector("tbody")

//  get data provided the data trough api
let getData = async() =>{ 
    let res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")
    let data = await res.json()
    // display data pass here 
    displayData(data.data)

}
getData()


// display data takes  all the data from api and shows on user data
let displayData =(arr) =>{
      tbody.innerHTML = "";

      arr.forEach((ele , i)=>{
        let tr = document.createElement("tr")

        let id = document.createElement("td")
        id.innerHTML = ele.id;
        
        let name = document.createElement("td")
        name.innerHTML = ele.name;

        let gender = document.createElement("td")
        gender.innerHTML = ele.gender

        let department = document.createElement("td")
        department.innerHTML = ele.department;

        let salary = document.createElement("td")
        salary.innerHTML = ele.salary

        tr.append(id , name , gender , department , salary)
    //    tbody display all the data on table
        tbody.append(tr)
      })
}

//-------- sort the data-----------

let sortBtn = document.querySelector("#sort")

let sortData = async()=>{
    let value = sortBtn.value

    let res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")
    let data = await res.json()
    //  console.log(data.data)
     let Arr = data.data
     let narr;

     if(value === "asc"){
        narr = Arr.sort((a,b)=>{
             return a.salary-b.salary
        })
     }else if(value === "desc"){
        narr = Arr.sort((a,b)=>{
            return b.salary-a.salary
       })
     }
     displayData(narr)

}
sortBtn.addEventListener("change" , sortData)

// -----filter the data  by department-----

let filter = document.querySelector("#Depart")
let filetrData = async()=>{
       let value = filter.value;
    //    taking all the data from api
       let res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")
       let data = await res.json()
        let Arr = data.data;
        console.log(Arr)

        // take the value of data 

        if(value === "SelectDepartment"){
            return displayData(data.data)
        }
        else{
            let narr = Arr.filter((ele , i)=>{
                    return ele.department === value;
            })
             displayData(narr)
        }
}

filter.addEventListener("change" , filetrData)

// here sorting the data by gender

let genfilter = document.querySelector("#gender")
let filterAge = async()=>{
    let value = genfilter.value;
    let res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")
            let data = await res.json()
             let Arr = data.data;
        
    if(value === "Gender"){
        return displayData(data.data)
    }else{
        let narr = Arr.filter((ele)=>{
               return ele.gender === value;
        })
        displayData(narr)
    }
    
}
 genfilter.addEventListener("change" , filterAge)

//

let paginateBtn = document.querySelector("#paginate")

let paginate = async() => {
    let res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10")
    let data = await res.json()
     let Prr = data.data;
     return Prr
     console.log(Prr)
}

paginateBtn.addEventListener("click" , paginate)











