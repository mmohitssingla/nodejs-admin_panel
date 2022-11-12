exports.index = (req, res, next) => {
    res.render('admin/auth/login');
}

exports.login = (req, res, next) => {
    res.redirect('dashboard');
}

exports.dashboard = (req, res, next) => {
    res.render('admin/dashboard/index');
}