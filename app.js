const issueList = document.getElementById("issue-list");
const PageNumber = document.getElementById("pagenumber");
const nextButton = document.getElementById("load_next");
const PrevButton = document.getElementById("load_prev");

let currentPage = 1;

function DisplayIssue(issues) {
  issueList.innerHTML = "";
  issues.forEach((issue) => {
    const ListItem = document.createElement("li");
    ListItem.textContent = issue.title;
    issueList.appendChild(ListItem);
  });
}

function SetPageNumber() {
  PageNumber.textContent = `Page Number ${currentPage}`;
}

function FetchIssue(pageNumber) {
  fetch(
    `https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`
  )
    .then((response) => response.json())
    .then((issues) => {
      DisplayIssue(issues);
      SetPageNumber();
    });
}

nextButton.addEventListener("click", () => {
  currentPage++;
  FetchIssue(currentPage);
});

PrevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    FetchIssue(currentPage);
  }
});

FetchIssue(currentPage);
