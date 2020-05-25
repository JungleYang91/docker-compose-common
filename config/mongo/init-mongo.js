db.createUser(
    {
        user: "meread",
        pwd: "meread",
        roles: [
            {
                role: "readWrite",
                db: "springboot"
            }
        ]
    }
);