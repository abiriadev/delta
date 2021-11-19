

const data = `    .wraper {
      /* border: 5px solid /gray; */
      height: 400px; 
      display: grid; 
      grid-template-columns: 110px 1fr;
      /* grid-col   umn-gap:    *    10px; */
    }
    
    
    .sidebar {
      /* border: 5    *   px s /    olid green; */
      border-right: 1px solid black;
    }

    .sidebar .menu,
    .sidebar .menu li {
      width: auto;
      height: auto;

      padding: 2px;
      font-size: 1em;
      font-weight: 500;
      font-family: Arial, Helvetica, sans-serif;
    }
    
        aap a pa ad { ahs  
        : wpx2626px; } #va > a::hover { agag:    
        37838vm   
        
        
        ; }
    
        f1,
        h2[abba=abt] { whwh: agsh ;} 
        
        
        a { text-decoration: none; }
    
      `
    
    // console.log(data2);
    
let cssjson = 
      // JSON.stringify(
      data
      .replace(/(["'])/g, '\\&1')
      .replace(/\/\*.*\*\//g, '')    
      .replace(
        /(?:\}|^)\s*(\S+|\S[^{]*\S)(?=\s*\{)/g,
        '},\n "$1" : ')
      .replace(/(?:\s*)([\w\-\d]+)\s*:\s*(\S+|\S[^;:\}]*\S)\s*\;/g, '"$1" : "$2",')
      .replace(/,(?=\s*\})/g, '')
       .replace(/\n/g, '') 
       ;
        // '"$1" : "$2",'
  //console.log(cssjson);


// cssjson.split('\n').forEach(line => document.getElementById('body').innerHTML += `<pre>${line}</pre>`)
// document.write(cssjson)
const a = `{${cssjson.slice(2)}}`
// a.split('').forEach(l => console.log(l))

console.log(JSON.stringify(JSON.parse(`{".# ~% ^a  *~,s":"sh", "shshjs": {"@^@%":"shwhhw"}}`)));

cssjson = JSON.parse(`{${cssjson.slice(2)}}`)
console.log(JSON.stringify(cssjson))
