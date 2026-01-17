public class InventoryManager
{
    private readonly IInventoryService _inventoryService;

    public InventoryManager(IInventoryService inventoryService)
    {
        _inventoryService = inventoryService;
    }

    public async Task<bool> HasInventory(IEnumerable<Item> items)
    {
        return await _inventoryService.CheckAvailability(items);
    }

    public async Task Reserve(IEnumerable<Item> items)
    {
        await _inventoryService.ReserveItems(items);
    }

    public async Task Commit(IEnumerable<Item> items)
    {
        await _inventoryService.CommitReservation(items);
    }

    public async Task Release(IEnumerable<Item> items)
    {
        await _inventoryService.ReleaseReservation(items);
    }

    public async Task Restore(IEnumerable<Item> items)
    {
        await _inventoryService.RestoreInventory(items);
    }
}

