const formularioLogin = (req, res) => {
    res.render('auth/login', {
        auth: true
    });
};

export {
    formularioLogin,
}