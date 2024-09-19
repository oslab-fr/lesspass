def create_profile(args):
    default_profile = {
        "lowercase": False,
        "uppercase": False,
        "digits": False,
        "symbols": False,
        "length": 12,
        "counter": 0,
        "site": "login",
        "login": "",
        "exclude": "",
    }

    args.update(default_profile)
    
    profile = {
        "lowercase": False if args.nl else True,
        "uppercase": False if args.nu else True,
        "digits": False if args.nd else True,
        "symbols": False if args.ns else True,
        "length": args.length,
        "counter": args.counter,
        "site": args.site,
        "login": args.login or "",
        "exclude": args.exclude or "",
    }
    if args.l or args.u or args.d or args.s:
        profile["lowercase"] = args.l
        profile["uppercase"] = args.u
        profile["digits"] = args.d
        profile["symbols"] = args.s
    return profile
