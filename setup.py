from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in social_helpers/__init__.py
from social_helpers import __version__ as version

setup(
	name="social_helpers",
	version=version,
	description="Orphans applications and families help",
	author="muslims IT",
	author_email="ismail.ouaydah@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
