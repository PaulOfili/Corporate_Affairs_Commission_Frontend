import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideToast } from '../../../store/actions/toast'
import { Icon } from 'antd';

function Toast () {   

    //Redux store selector
    const toastOptions = useSelector((store) => store.toast);

    //Dispatch actions
    const actionDispatch = useDispatch();
    const hideToastDispatch = useCallback(() => actionDispatch(hideToast()),[actionDispatch]);

    /**
     * Only run this code only when the toastOpttions variable from the store changes.
     * The hideToastDispatch function is made into a callback which means it is memoized and doesnt't change until 
     * explicitly done so. It is constant for almost the entirety of the time.
     * If there would be any change to the time given in setTimeout function, please update the value provided in the _toast.scss in the stylesheet
     * to be exactly 'newtime -400' in milliseconds.
     */
    useEffect(() => {
        if (!toastOptions.isHidden) {
            setTimeout(hideToastDispatch, 5000);
        }
    }, [toastOptions, hideToastDispatch])

    let isVisibleClass = (toastOptions.isHidden) ? '' : ' visible'
    const typeToColor = {
        info: {
            color: '#00529B',
            backgroundColor: '#BDE5F8'
        },
        success: {
            color: '#4F8A10',
            backgroundColor: '#DFF2BF'
        },
        error: {
            color: '#D8000C',
            backgroundColor: '#FFD2D2'
        }
    }

    return (
        <div className={`toast-container${isVisibleClass}`} style={{...typeToColor[toastOptions.type]}}>
            {toastOptions.text}
            <button className="toast-dismiss" onClick={hideToastDispatch}>
                <Icon type="close-circle" theme="filled" />
            </button>
        </div>
    )
}

export default Toast