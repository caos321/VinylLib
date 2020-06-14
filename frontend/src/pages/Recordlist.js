import React, { useCallback, useEffect, useState } from "react";
import { Page } from "../components/Page";
import { Heading } from "../components/Fonts";
import Record from '../components/Record';
import { getRecords } from '../ApiService/ApiService';

const RecordList = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    getRecords()
      .then(records => setRecords(records))
      .then(records => setShowLoading(false));
  }, []);
  
  return (
    <Page>
      <Heading>All Records</Heading>
      {showLoading && <span>Loading...</span>}
      {!showLoading && records.map(record => <Record title={record.album} description={record.artist} />)}
    </Page>
  );
};

export default RecordList;