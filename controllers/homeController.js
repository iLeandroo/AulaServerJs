exports.index = (req,res) => {
    res.status(200).render('index',
    {
        title: 'MVC com Express',
        massage:'Bem-Vindo à MVC'
        
    })
    }
    