const form = document.querySelector("#exceptionForm");
const tableBody = document.querySelector("#tableBody");

const filterIssue =
document.querySelector("#filterIssue");

const filterStatus =
document.querySelector("#filterStatus");

const openCount =
document.querySelector("#openCount");

const resolvedCount =
document.querySelector("#resolvedCount");

let issues = [];

form.addEventListener("submit", function(e){

    e.preventDefault();

    const deliveryId =
    document.querySelector("#deliveryId").value;

    const customerName =
    document.querySelector("#customerName").value;

    const issueType =
    document.querySelector("#issueType").value;

    const notes =
    document.querySelector("#notes").value;

    const priority =
    document.querySelector(
        'input[name="priority"]:checked'
    );

    if(
        deliveryId === "" ||
        customerName === "" ||
        issueType === "" ||
        !priority
    ){
        alert("Fill all required fields");
        return;
    }

    const issue = {

        id: deliveryId,
        customer: customerName,
        type: issueType,
        priority: priority.value,
        notes: notes,
        status: "Open"

    };

    issues.push(issue);

    renderTable();

    form.reset();

});

function renderTable(){

    tableBody.innerHTML = "";

    issues.forEach((issue,index)=>{

        const row =
        document.createElement("tr");

        if(issue.status === "Resolved"){
            row.classList.add("resolved-row");
        }

        row.innerHTML = `

        <td>${issue.id}</td>
        <td>${issue.customer}</td>
        <td>${issue.type}</td>

        <td class="${
            issue.priority==="High"
            ? "high-priority"
            : ""
        }">

        ${issue.priority}

        </td>

        <td>${issue.status}</td>

        <td>

        <button
        class="resolve-btn"
        data-index="${index}">
        Resolve
        </button>

        <button
        class="delete-btn"
        data-index="${index}">
        Delete
        </button>

        </td>

        `;

        tableBody.appendChild(row);

    });

    updateCounts();

    applyFilters();
}
tableBody.addEventListener("click", function(e){

    const index =
    e.target.dataset.index;

    if(
        e.target.classList.contains("resolve-btn")
    ){

        issues[index].status =
        "Resolved";

        renderTable();

    }

    if(
        e.target.classList.contains("delete-btn")
    ){

        const confirmDelete =
        confirm("Delete this issue?");

        if(confirmDelete){

            issues.splice(index,1);

            renderTable();

        }
    }

});
function updateCounts(){

    let open = 0;
    let resolved = 0;

    issues.forEach(issue=>{

        if(issue.status==="Open"){
            open++;
        }
        else{
            resolved++;
        }

    });

    openCount.textContent = open;
    resolvedCount.textContent = resolved;
}
filterIssue.addEventListener(
    "change",
    applyFilters
);

filterStatus.addEventListener(
    "change",
    applyFilters
);
function applyFilters(){

    const rows =
    document.querySelectorAll("tbody tr");

    rows.forEach((row,index)=>{

        const issue = issues[index];

        let issueMatch =
        filterIssue.value==="All" ||
        issue.type===filterIssue.value;

        let statusMatch =
        filterStatus.value==="All" ||
        issue.status===filterStatus.value;

        if(issueMatch && statusMatch){
            row.style.display="";
        }
        else{
            row.style.display="none";
        }

    });
}
