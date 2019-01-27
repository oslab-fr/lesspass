import unittest

from lesspass.password import generate_password
from lesspass import password


class TestPassword(unittest.TestCase):
    def test_generate_password(self):
        profile = {
            "site": "example.org",
            "login": "contact@example.org",
            "lowercase": True,
            "uppercase": True,
            "digits": True,
            "symbols": True,
            "length": 16,
            "counter": 1,
        }
        master_password = "password"
        self.assertEqual(
            generate_password(profile, master_password), "WHLpUL)e00[iHR+w"
        )

    def test_generate_password_2(self):
        profile = {
            "site": "example.org",
            "login": "contact@example.org",
            "lowercase": True,
            "uppercase": True,
            "digits": True,
            "symbols": False,
            "length": 14,
            "counter": 2,
        }
        master_password = "password"
        self.assertEqual(generate_password(profile, master_password), "MBAsB7b1Prt8Sl")

    def test_generate_password_3(self):
        profile = {
            "site": "example.org",
            "login": "contact@example.org",
            "lowercase": False,
            "uppercase": False,
            "digits": True,
            "symbols": False,
            "length": 16,
            "counter": 1,
        }
        master_password = "password"
        self.assertEqual(
            generate_password(profile, master_password), "8742368585200667"
        )

    def test_generate_password_4(self):
        profile = {
            "site": "example.org",
            "login": "contact@example.org",
            "lowercase": True,
            "uppercase": True,
            "digits": False,
            "symbols": True,
            "length": 16,
            "counter": 1,
        }
        master_password = "password"
        self.assertEqual(
            generate_password(profile, master_password), "s>{F}RwkN/-fmM.X"
        )

    def test_generate_password_nrt_328(self):
        profile = {
            "site": "site",
            "login": "login",
            "lowercase": True,
            "uppercase": True,
            "digits": True,
            "symbols": True,
            "length": 16,
            "counter": 10,
        }
        master_password = "test"
        self.assertEqual(
            generate_password(profile, master_password), "XFt0F*,r619:+}[."
        )

    def test_calc_entropy(self):
        password_profile = {
            "site": "example.org",
            "login": "contact@example.org",
            "counter": 1,
        }
        master_password = 'password'

        self.assertEqual(
            password._calc_entropy(password_profile, master_password), b'dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e'
        )

    def test_get_configured_rules_empty_when_no_rules_in_profile(self):
        password_profile = {}

        self.assertListEqual(password._get_configured_rules(password_profile), [])

    def test_get_configured_rules_ignore_disable_rules(self):
        password_profile = {
            "lowercase": False,
            "uppercase": True,
            "digits": False,
            "symbols": True,
        }

        self.assertListEqual(password._get_configured_rules(password_profile), ['uppercase', 'symbols'])

    def test_get_set_of_characters_without_rule(self):
        self.assertEqual(password._get_set_of_characters(), 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~')
        
    def test_get_set_of_characters_with_single_rule(self):
        self.assertEqual(password._get_set_of_characters(["lowercase"]), "abcdefghijklmnopqrstuvwxyz")
        self.assertEqual(password._get_set_of_characters(["uppercase"]), "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
        self.assertEqual(password._get_set_of_characters(["digits"]), "0123456789")
        self.assertEqual(password._get_set_of_characters(["symbols"]), "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~")
        
    def test_get_set_of_characters_with_several_rules(self):
        self.assertEqual(password._get_set_of_characters(["lowercase", "digits"]), "abcdefghijklmnopqrstuvwxyz0123456789")

    def test_consume_entropy(self):
        entropy = b'dc33d431bce2b01182c613382483ccdb0e2f66482cbba5e9d07dab34acc7eb1e'

        password_value, password_entropy = password._consume_entropy( 
            generated_password="", 
            quotient=int(entropy, 16), 
            set_of_characters="abcdefghijklmnopqrstuvwxyz0123456789", 
            max_length=12
        )
        
        self.assertEqual(password_value, 'gsrwvjl3d0sn')
        self.assertEqual(password_entropy, 21019920789038193790619410818194537836313158091882651458040)
