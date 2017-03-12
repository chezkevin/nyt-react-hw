var React = require('react');

var Search = React.createClass() {
    <div className="col-lg-12">
        <div className="panel panel-primary search-parameters">
            <div className="panel-heading">
                <h3 className="panel-title">Search Parameters</h3>
            </div>
            <div className="panel-body">
                <form className="form-horizontal">
                <div className="form-group">
                    <div className="col-lg-12">
                        <label className="col-lg-6 control-label">Search Term</label>
                    </div>
                    <div className="col-lg-12">
                        <input type="text" className="form-control" id="input-search-term" placeholder="Bill Murray">
                    </div>
                    <div className="col-lg-12">
                        <label className="col-lg-6 control-label">Number of Records to Retrieve:</label>
                    </div>
                    <div className="col-lg-12">
                        <select name = "Number of records" className="col-lg-12 form-control" id="num-records">
                            <option value="1">1</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div className="col-lg-12">
                        <label className="col-lg-6 control-label">Start Year (Optional):</label>
                    </div>
                    <div className="col-lg-12">
                        <input type="text" className="form-control" id="input-start-year" placeholder="1980">
                    </div>
                    <div className="col-lg-12">
                        <label className="col-lg-6 control-label">End Year (Optional):</label>
                    </div>
                    <div className="col-lg-12">
                        <input type="text" className="form-control" id="input-end-year" placeholder="2016">
                    </div>
                    <div className="col-lg-12">
                        <button type="submit" id="search" className="btn btn-primary">Search</button>
                        <button type="reset" id="reset" className="btn btn-default">Clear Results</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
}

module.exports = Search;