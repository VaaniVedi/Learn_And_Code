class CustomerSearchService
{
    public List<Customer> SearchByCountry(string country)
    {
        return SearchCustomers(customer => customer.Country.Contains(country));
    }

    public List<Customer> SearchByCompanyName(string companyName)
    {
        return SearchCustomers(customer => customer.CompanyName.Contains(companyName));
    }

    public List<Customer> SearchByContactName(string contactName)
    {
        return SearchCustomers(customer => customer.ContactName.Contains(contactName));
    }

    private List<Customer> SearchCustomers(Func<Customer, bool> filterCondition)
    {
        return db.Customers
                 .Where(filterCondition)
                 .OrderBy(customer => customer.CustomerID)
                 .ToList();
    }

    public string ExportToCsv(List<Customer> customers)
    {
        var csvBuilder = new StringBuilder();

        foreach (var customer in customers)
        {
            csvBuilder.AppendLine(
                $"{customer.CustomerID},{customer.CompanyName},{customer.ContactName},{customer.Country}"
            );
        }

        return csvBuilder.ToString();
    }
}
