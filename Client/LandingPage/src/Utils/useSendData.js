/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
const UseSendData = (tigger, endpoint, data) => {
  const [status, setStatus] = useState();

  useEffect(() => {
    if (tigger) {
      axios
        .post(`${import.meta.env.VITE_APP_API_URL_TEST}` + endpoint, data)
        .then((res) => {
          if (res.status === 201) {
            toast.success("Data submitted successfully...");
            setStatus("200 " + Math.floor(Math.random() * 100));
          }
        })
        .catch((error) => {
          toast.error("Something went wrong...");
          setStatus("500" + Math.floor(Math.random() * 100));
        });
    }
  }, [tigger]);
  return status;
};

export default UseSendData;
