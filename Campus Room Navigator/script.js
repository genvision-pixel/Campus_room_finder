// script.js

// Room directions for Ground Floor
const groundFloorRooms = {
  "H.M & F.M Lab": "From main gate -> move ahead -> take left -> reached",
  "NSS Cell": "From main gate -> move ahead -> take left -> Beside Lab -> reached",
  "Board Room": "From main gate -> move ahead -> take left -> beside NSS Cell -> reached",
  "Girls Waiting Hall": "From main gate -> move ahead -> take left -> near stairs -> reached",
  "CDC": "From main gate -> move ahead -> take left -> take right -> reached",
  "IQAC": "From main gate -> move ahead -> take left -> take right -> Beside CDC -> reached",
  "Admissions Office": "From main gate -> move ahead -> take left -> more forward -> take right -> beside IQAC -> reached",
  "Administrative Office": "From main gate -> move ahead -> take left -> move forward -> take right -> beside admission cell -> reached",
  "Executive Office": "From main gate -> move ahead -> take left -> move forward -> take right -> beside administrative cell -> reached",
  "Exam Branch": "From main gate -> move ahead -> take left -> move forward -> take right -> take right -> reached",
  "UPS Room": "From main gate -> move ahead -> take left -> move forward -> take right -> beside stairs -> take right -> beside Exam Branch -> reached",
  "Drinking Water": "From main gate -> move ahead -> take straight path -> move forward -> take left -> reached",
  "Gents Washroom": "From main gate -> move ahead -> take straight path -> move forward -> take left -> reached",
  "BEE Lab": "From main gate -> move ahead -> take straight path -> move forward -> reached",
  "Materials Science Lab": "From main gate -> move ahead -> take straight path -> move forward -> reached",
  "Mechanical Department": "From main gate -> move ahead -> take straight path -> move forward -> reached",
  "Civil Department": "From main gate -> move ahead -> take straight path -> move forward -> reached",
  "Staff Room": "From main gate -> move ahead -> take straight path -> move forward -> reached",
  "Auditorium": "From main gate -> move ahead -> first right -> to the corner -> reached",
  "Book Store": "From main gate -> move ahead -> first right -> reached",
  "Pharmacy Block": "From main gate -> move forward till second right -> take right -> reached"
};

// Placeholder for other floors
const floors = {
  "Ground": groundFloorRooms,
  "First": {},
  "Second": {},
  "Third": {}
};

// Show rooms of selected floor
function showRooms(floor) {
  const roomListDiv = document.getElementById("room-list");
  const directionsDiv = document.getElementById("directions");
  
  roomListDiv.innerHTML = ""; // clear previous rooms
  directionsDiv.innerText = "Select a room to see directions"; // default message
  
  const rooms = floors[floor];
  
  if (Object.keys(rooms).length === 0) {
    roomListDiv.innerHTML = "<p>No rooms added yet for this floor.</p>";
    return;
  }
  
  for (let room in rooms) {
    const btn = document.createElement("button");
    btn.innerText = room;
    btn.onclick = function() {
      directionsDiv.innerText = rooms[room];
    };
    roomListDiv.appendChild(btn);
  }
}
