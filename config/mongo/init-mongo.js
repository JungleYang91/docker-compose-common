db.createUser(
    {
        user: "meread",
        pwd: "meread",
        roles: [
            {
                role: "readWrite",
                db: "springboot"
            },
            {
                "role" : "dbAdmin",
                "db" : "springboot"
            }
        ]
    }
);