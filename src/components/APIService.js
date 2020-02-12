const APIURL = "http://localhost:5000";

class APIService {
    static fetchFirst(cb) {
        fetch(`${APIURL}/adds?from=2019-12-01&to=2019-12-31`, {mode: 'no-cors'})
            .then(resp => {
                try {
                    resp = JSON.parse(resp._bodyText);
                    cb(resp);
                } catch(e) {
                    cb(e);
                }
            })
            .catch(e => cb(e));
    }

    static fetchSecond(routeid, stationid, cb) {
        fetch(`https://api.tfl.gov.uk/Line/${routeid}/Arrivals/${stationid}`)
            .then(resp => {
                try {
                    resp = JSON.parse(resp._bodyText);
                    cb(resp);
                } catch(e) {
                    cb(e);
                }
            })
            .catch(e => cb(e));
    }
}

export default APIService;
