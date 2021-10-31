const fetch = require('node-fetch')

const handler = async function ({ queryStringParameters }) {
  try {
    const response = await fetch(
      "http://api.trafikinfo.trafikverket.se/v1.2/data.json",
      {
        method: "POST",
        body: getBody(queryStringParameters),
        headers: {
          "Content-Type": "application/xml",
          Accept: "application/json"
        }
      }
    )
    if (!response.ok)
      // NOT res.status >= 200 && res.status < 300
      return {
        statusCode: response.status,
        body: JSON.stringify({ msg: response.statusText })
    }
    const data = await response.json()
    const [body] = data.RESPONSE.RESULT

    return {
      statusCode: 200,
      body: JSON.stringify(body)
    }
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    }
  }
}

function getBody({ direction, locations }) {
  return `
<REQUEST>
  <LOGIN authenticationkey='${process.env.TRAFIKVERKET_API_KEY}' />
     <QUERY objecttype='TrainAnnouncement'>
      <FILTER>
         <AND>
            <NE name='Canceled' value='true' />
            <LIKE name='AdvertisedTrainIdent' value='/[${
              direction === "n" ? "02468" : "13579"
            }]$/' />
            <IN name='LocationSignature' value='${locations}' />
            <OR>
             <AND>
              <GT name='AdvertisedTimeAtLocation' value='$dateadd(-1:30)' />
              <LT name='AdvertisedTimeAtLocation' value='$dateadd(1:15)' />
             </AND>
             <AND>
              <GT name='EstimatedTimeAtLocation' value='$dateadd(-1:30)' />
              <LT name='EstimatedTimeAtLocation' value='$dateadd(1:15)' />
             </AND>
            </OR>
         </AND>
      </FILTER>
     </QUERY>
</REQUEST>`
}

module.exports = { handler }
