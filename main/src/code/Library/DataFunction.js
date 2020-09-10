
import { isUndefined } from 'util';

export const ToNumber = val => {
    let rtnVal = 0;
    rtnVal = Number(val);
    if (isNaN(rtnVal) || rtnVal == undefined || rtnVal == "" || rtnVal == Infinity || rtnVal == -Infinity) {
        rtnVal = 0;
    }

    return rtnVal;
};

export const ToString = src => {
    let rtn = ""

    if (src === null || src === undefined || src === "" || src === "null") {
        rtn = "";
    } else {
        rtn = src.toString();
    }

    return rtn;
};

export const IsNullOrEmpty = str => {
    let isEmpty = false
    if (isUndefined(str) || str === "" || str === Infinity || str === null || str === 'null' || str === "undefined") {
        isEmpty = true
    } else if (typeof (str) === 'string' && str.trim() === "") {
        isEmpty = true
    }

    return isEmpty
}

/**
 *
 * 사용법
 * SortArray(array,'mn_4','desc')  array -> 객체를 배열로 가지고 있을때
 * SortArray(array,null,'desc')    array -> 값을 배열로 가지고 있을때
 * @param {정렬할 배열} array
 * @param {객체 비교시 구분값(컬럼)} gubun
 * @param {정렬 방식} type
 */
export const SortArray = (array, gubun, type) => {
    if (!IsNullOrEmpty(gubun)) {
        if (type === 'desc') {
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array.length - (i + 1); j++) {
                    if (array[j][gubun] < array[j + 1][gubun]) {
                        let tmp = array[j + 1]
                        array[j + 1] = array[j]
                        array[j] = tmp
                    }
                }
            }
        } else if (type === 'asc') {
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array.length - (i + 1); j++) {
                    if (array[j][gubun] > array[j + 1][gubun]) {
                        let tmp = array[j + 1]
                        array[j + 1] = array[j]
                        array[j] = tmp
                    }
                }
            }
        }
    } else {
        if (type === 'desc') {
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array.length - (i + 1); j++) {
                    if (array[j] < array[j + 1]) {
                        let tmp = array[j + 1]
                        array[j + 1] = array[j]
                        array[j] = tmp
                    }
                }
            }
        } else if (type === 'asc') {
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array.length - (i + 1); j++) {
                    if (array[j] > array[j + 1]) {
                        let tmp = array[j + 1]
                        array[j + 1] = array[j]
                        array[j] = tmp
                    }
                }
            }
        }
    }

    return array
}