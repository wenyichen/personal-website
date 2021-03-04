import React, { Suspense, useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import { resumeFileId } from "../../constants/constants";
import { wrapPromise } from "../../utils/fetchUtils";
import { downloadFile, pdfResponseToFile } from "../../utils/pdfUtils";
import { Loading } from "../common/loading";
import "./resume.scss";
import { callWhenGApiInitialized } from "../../apis/gapi";

interface IResource {
  read(): any;
}

const MAX_PDF_WIDTH = 1000;

export const ResumePdf = () => {
  const [resource, setResource] = useState<IResource>({
    read: () => undefined,
  });

  useEffect(() => {
    const getResume = () => {
      const request = window.gapi.client.request({
        path: `https://www.googleapis.com/drive/v3/files/${resumeFileId}/export`,
        params: {
          mimeType: "application/pdf",
        },
      });
      setResource(wrapPromise(request));
    };
    callWhenGApiInitialized(getResume);
  }, []);

  let result;
  result = resource.read();
  const file = result ? pdfResponseToFile(result) : undefined;

  return (
    <>
      <a className="resume-download" href={URL.createObjectURL(file)} download>
        download
      </a>
      <div className="resume-document-container">
        <Document
          className="resume-document"
          file={file}
          noData=""
          loading=""
          error="failed to load resume"
        >
          <Page pageNumber={1} size="4A0" width={MAX_PDF_WIDTH} />
        </Document>
      </div>
    </>
  );
};

const ResumeLoading = () => {
  return (
    <div className="resume-loading">
      <Loading />
    </div>
  );
};

export const Resume = () => {
  return (
    <div className="resume">
      <Suspense fallback={<ResumeLoading />}>
        <ResumePdf />
      </Suspense>
    </div>
  );
};
