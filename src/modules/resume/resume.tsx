import React, { Suspense, useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { PDFViewer, StyleSheet } from '@react-pdf/renderer';
import { resumeFileId } from '../../constants/constants';
import { wrapPromise } from '../../utils/fetch-utils';
import { pdfResponseToFile } from '../../utils/pdf-utils';
import { Loading } from '../common/loading';
import './resume.scss'

interface IResource {
    read(): any
}

export const ResumePdf = () => {
    const [resource, setResource] = useState<IResource>({ read: () => undefined });


    useEffect(() => {
        const initGApi = () => {
            window.gapi.client.init({
                'apiKey': 'AIzaSyB7coZjyCZ9vhS5N0_AsrQ_RQt8QyFeVzQ',
            }).then(getResume).catch(e => {
                console.log(e)
            });
        }

        const getResume = () => {
            const request = window.gapi.client.request({
                path: `https://www.googleapis.com/drive/v3/files/${resumeFileId}/export`,
                params: {
                    mimeType: 'application/pdf'
                }
            })
            setResource(wrapPromise(request));
        }

        window.gapi.load('client', initGApi);
    }, [])

    let result;
    result = resource.read();
    const file = result ? pdfResponseToFile(result) : undefined;

    const styles = StyleSheet.create({
        document: {
            display: 'flex',
            width: '100%'
        },
        page: {
            width: "90vw",
            justifyContent: 'center',
        }
    });

    return (
        <div>
            <Document
                className="resume-document"
                styles={styles.document}
                file={file}
                noData="no data"
                loading="loading..."
                error="failed to load resume"
                >
                <Page pageNumber={1} size="4A0" width={1000} style={styles.page} />
            </Document>
        </div>
    )
}

export const Resume = () => {
    return <div className="resume"><Suspense fallback={<Loading />}><ResumePdf /></Suspense></div>;
}