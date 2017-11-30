// index2.js
//creating new api
var REST_DATA = 'api/project';
var defaultItems = [
    
    ];
var item = 0;

function encodeUriAndQuotes(untrustedStr) {
    return encodeURI(String(untrustedStr)).replace(/'/g, '%27').replace(')', '%29');
}

function addcar() {
    console.log("adding Client");
    //var data = document.getElementById('newcar').value;
    var clientnumber = 1;
    var data = {
        clientnumber = clientnumber + 1,
        name: "client",
        value: document.getElementById('newclient').value
    };
    item++;
    xhrPost(REST_DATA, data, function(item) {
        
    }, function(err) {
        console.error(err);
    });
}



function addItem(item) {
    
        var row = document.createElement('tr');
        row.className = "tableRows";
        var id = item && item.id;
        if (id) {
            row.setAttribute('data-id', id);
        }
    

        row.innerHTML = "<td>"+item.value+"</td>";
    
        var table = document.getElementById('cars');
        table.lastChild.appendChild(row);

    }
    
function loadItems() {
    xhrGet(REST_DATA, function(data) {

        //stop showing loading message
        stopLoadingMessage();
        console.log(data);
        
        var receivedItems = data || [];
        var items = [];
        var i;
        // Make sure the received items have correct format
        for (i = 0; i < receivedItems.length; ++i) {
            var item = receivedItems[i];
            if (item && 'id' in item) {
                items.push(item);
            }
        }
        var hasItems = items.length;
        if (!hasItems) {
            items = defaultItems;
        }
        for (i = 0; i < items.length; ++i) {
            addItem(items[i]);
        }

    }, function(err) {
        console.error(err);
    });
}


function showLoadingMessage() {
    console.log("loading");
    document.getElementById('loadingImage').innerHTML = "Loading data " + "<img height=\"100\" width=\"100\" src=\"images/loading.gif\"></img>";
}

function stopLoadingMessage() {
    document.getElementById('loadingImage').innerHTML = "";
}

showLoadingMessage();
//updateServiceInfo();
loadItems();

