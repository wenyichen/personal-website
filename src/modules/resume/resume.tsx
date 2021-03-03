import React, { Suspense, useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { StyleSheet } from '@react-pdf/renderer';
import { resumeFileId } from '../../constants/constants';
import { wrapPromise } from '../../utils/fetchUtils';
import { pdfResponseToFile } from '../../utils/pdfUtils';
import { Loading } from '../common/loading';
import './resume.scss'
import { callWhenGApiInitialized } from '../../apis/gapi';

interface IResource {
    read(): any
}

const MAX_PDF_WIDTH = 1000;

export const ResumePdf = () => {
    const [resource, setResource] = useState<IResource>({ read: () => undefined });

    useEffect(() => {
        const getResume = () => {
            const request = window.gapi.client.request({
                path: `https://www.googleapis.com/drive/v3/files/${resumeFileId}/export`,
                params: {
                    mimeType: 'application/pdf'
                }
            })
            setResource(wrapPromise(request));
        }
        callWhenGApiInitialized(getResume);
    }, [])

    let result;
    result = resource.read();
    const file = result ? pdfResponseToFile(result) : undefined;

    const styles = StyleSheet.create({
        document: {
            display: 'flex',
        },
        page: {
            justifyContent: 'center',
        }
    });

    const pageWidth = Math.min(MAX_PDF_WIDTH, window.innerWidth);

    return (
        <div>
            <Document
                className="resume-document"
                styles={styles.document}
                file={file}
                noData=""
                loading=""
                error="failed to load resume"
            >
                <Page pageNumber={1} size="4A0" width={pageWidth} style={styles.page} />
            </Document>
        </div>
    )
}

const ResumeLoading = () => {
    return <div className="resume-loading">
        <Loading />
    </div>
}

export const Resume = () => {
    return <div className="resume"><Suspense fallback={<ResumeLoading />}><ResumePdf /></Suspense></div>;
}