import React, { Suspense, useEffect, useState } from 'react';
import { Document } from 'react-pdf';
import { resumeFileId } from '../../constants/constants';
import { wrapPromise } from '../../utils/fetch-utils';
import { Loading } from '../common/loading';
import './resume.scss'

interface IResource {
    read(): any
}

export const ResumePdf = () => {
    const [resource, setResource] = useState<IResource>({ read: () => undefined });

    useEffect(() => {
        window.gapi.load('client', initGApi);
    }, [])

    const initGApi = () => {
        window.gapi.client.init({
            'apiKey': 'AIzaSyBuOoCb86RuEnep4lQEwo990KOkw99HDXk',
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

    let result;
    result = resource.read();
    return (
        <Document
            file={result}
        />
    )
}

export const Resume = () => {
    return <div className="resume"><Suspense fallback={<Loading />}><ResumePdf /></Suspense></div>;
}