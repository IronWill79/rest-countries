export default function CountryListSort(a, b) {
  let nameA = a.name;
  let nameB = b.name;
  return nameA.localeCompare(nameB);
}