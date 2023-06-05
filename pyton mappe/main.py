import unittest

def adder_funtion(term1, term2):
    return (term1 * term2)


class Test_adder_function(unittest.TestCase):

    def test_number_input(self):
        expected = 4
        actual = adder_funtion(2, 2)
        self.assertEqual(actual, expected)