import('./index.scss')
import afn from './a'
console.log('hello webpack!!!  haoxiangyounalibudui');
afn();
if (process.env.NODE_ENV === 'development'){
    console.log('base is localhost')
}else {
    console.log('baseurl is saki.com')
}